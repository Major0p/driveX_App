export function SetTokenToLocalStorage(token)
{
    localStorage.setItem("driveXToken",token);
};

export function GetTokenFromLocalStorage()
{
    return localStorage.getItem("driveXToken");
};