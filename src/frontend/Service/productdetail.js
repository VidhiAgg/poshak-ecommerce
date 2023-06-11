export async function getProductDetail(productId, setProduct, 
    setLoader){
        setLoader(true)
        try {
            const response = await fetch("/api/products/"+productId);
            if(response.status === 200){
                setProduct(response.formData.product);
            }
            
        } catch (error) {
            
        }finally{
            setLoader(false)
        }

}