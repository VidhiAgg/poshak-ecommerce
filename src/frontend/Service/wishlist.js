import { toast } from "react-toastify";

export const addItemToWish = async(productPayload,token,setWishList, setDisableWishBtn)=> {
    setDisableWishBtn(true);
    try {

        const response = await fetch("/api/user/wishlist/",{
            method:"POST",
            body:JSON.stringify({product:productPayload}),
            headers : {authorization: token},
        });
        const {wishlist} = await response.json();
        setWishList(wishlist);
        toast.success("Added to wishist")
        
    } catch (error) {
       toast.error("Please try after some time.")
    }finally{
        setDisableWishBtn(false)
    }


}



export async function removeItemFromWishlist(productID,token,setWishList, disableWishBtn)
{
    disableWishBtn(true)
try {

    const response = await fetch("/api/user/wishlist/"+ productID,{
        method:"DELETE",
        headers : {authorization: token},

    });
    if(response.status === 200 ){
        const {wishlist} = await response.json();
        setWishList(wishlist);
        toast.warning("Removed From wishist")
    }

    
    
} catch (error) {
    console.log(error)
    toast.error("Please try after some time.");
}finally{
disableWishBtn(false)
}

}