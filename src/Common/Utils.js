import {API_URLS} from '../API/URLs'

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

