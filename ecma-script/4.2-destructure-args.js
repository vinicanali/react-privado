function setCookieDefault(
    name,
    value,
    
    {
        secure = false,
        path = "/",
        domain = "example.com",
        expires = new Date(Date.now() + 60000),
    } = {}
) {
    console.log(secure, path, domain, expires);
}

