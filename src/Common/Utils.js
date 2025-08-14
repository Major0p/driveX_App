export function SetAccessTokenToLocalStorage(token)
{
    localStorage.setItem("driveX_accesToken",token);
};

export function GetAccessTokenToLocalStorage()
{
    return localStorage.getItem("driveX_accesToken");
};

export function SetSessionTokenToLocalStorage(token)
{
    localStorage.setItem("driveX_sessionToken",token);
};

export function GetSessionTokenFromLocalStorage()
{
    return localStorage.getItem("driveX_sessionToken");
};

export async function RefreshToken(url,userId)
{
    url += '?userId='+userId;
    const res = await fetch(url);

    if(!res.ok)
        return false;//redirect to log in

    const data = await res.json();

    SetAccessTokenToLocalStorage(data.accessToken);
    SetSessionTokenToLocalStorage(data.sessionToken);

    return true;
};

