const handleDeleteScreenshot = async (screenshotID) => {
    const response = await fetch(`${BASE_URL}/blog/${screenshotID}`,{
    method:  "DELETE"
})

//const data = await response.json()
return ("Deleted Screenshot")
}