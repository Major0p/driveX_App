import { BiBody } from 'react-icons/bi';
import {GetAccessTokenToLocalStorage,GetSessionTokenFromLocalStorage,SetAccessTokenToLocalStorage,SetSessionTokenToLocalStorage} from '../Common/Utils'
import { API_URLS } from './URLs';

export async function GetFilesFoldersByParentId(userId, parentId) {
    try {
        let accessToken = GetAccessTokenToLocalStorage();
        const url = API_URLS.GETFILES_FOLDERS_BY_PAREBT_ID + "?parentId=" + parentId;
        const reqObj = {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        };
        let res = await fetch(url, reqObj);

        if (res.status == 401) {
            let isTokenRefreshed = await RefreshToken(userId);

            if (isTokenRefreshed) {
                accessToken = GetAccessTokenToLocalStorage();
                reqObj.headers['Authorization'] = `Bearer ${accessToken}`;
                res = await fetch(url, reqObj);
            }
        }

        if (res.ok) {
            const result = await res.json();
            if (result.Success)
                return result.Data;
            else
                alert(result.Message);
        }

        return null;
    }
    catch (ex) {
        console.error(ex.message);
        return null;
    }
};

export async function IsLogedIn() {
    try {
        let url = API_URLS.ISLOGEDIN;
        const sessionToken = GetSessionTokenFromLocalStorage();
        let objReq = {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${sessionToken}`
            }
        };
        let res = await fetch(url, objReq);

        if (!res.ok)
            return false;

        res = await res.json();
        return (res.data == 1) ? true : false;
    }
    catch (ex) {
        console.log(ex.message);
        return false;
    }
}


//use this method when access token loaded request failed
export async function RefreshToken(userId) {
    try {
        let url = API_URLS.REFRESH_TOKEN;
        url += '?userId=' + userId;
        const sessionToken = GetSessionTokenFromLocalStorage();
        const reqObj = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionToken}`
            }
        };

        let res = await fetch(url, reqObj);

        if (res.ok) {
            const result = await res.json();

            SetAccessTokenToLocalStorage(result.Token.AccessToken);
            SetSessionTokenToLocalStorage(result.Token.SessionToken);
        }
        return false;
    }
    catch (ex) {
        console.error(ex.message);
        return false;
    }
};


export async function createNewFolder(folderName,parentId)
{
    try
    {
        const accessToken = GetAccessTokenToLocalStorage();
        const url = API_URLS.CREATEFOLDER;
        const reqObj = {
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
                name: folderName,
                parentId: parentId,
            })
        };

        let res = await fetch(url,reqObj);

        if(res.status == 401)
        {
            let isTokenRefreshed = await RefreshToken();

            if(isTokenRefreshed)
            {
                accessToken = GetAccessTokenToLocalStorage();
                reqObj.headers['Authorization'] = `Bearer ${accessToken}`;
                res = await fetch(url, reqObj);
            }
        }

        if(res.ok)
        {
            const result = await res.json();
            if (result.Success)
                return result.Data;
            else
                alert(result.Message);
        }

        return null;
    }
    catch(ex)
    {
        console.log(ex.message);
        return null;
    }
}