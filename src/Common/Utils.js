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

export function ClearTokens()
{
    localStorage.removeItem("driveX_sessionToken");
    localStorage.removeItem("driveX_accesToken");
}

export async function RefreshToken(url,userId)
{
    url += '?userId='+userId;
    const sessionToken = GetSessionTokenFromLocalStorage();
    const reqObj = {
        method:'GET',
        headers:{
            'Authorization': `Bearer ${sessionToken}`
        }
    };

    const res = await fetch(url,reqObj);

    if(!res.ok)
        return false;//redirect to log in

    const result = await res.json();

    SetAccessTokenToLocalStorage(result.Token.AccessToken);
    SetSessionTokenToLocalStorage(result.Token.SessionToken);

    return true;
};

