const API_BASE_URL = 'https://localhost:7135/api/';

export const API_URLS={
    SIGNUP: API_BASE_URL + 'User/signUp',
    LOGIN: API_BASE_URL + 'User/logIn',
    CREATEFOLDER : API_BASE_URL + 'File/CreateFolder',
    UPLOADFILE : API_BASE_URL + 'file/savefile',
    GETFILES_FOLDERS : API_BASE_URL + 'file/getfiles_foders'
}

