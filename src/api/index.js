export const getData = async (pageId) => {
    const response = await fetch(`https://reqres.in/api/users?page=${pageId}`);
    return await response.json();
};
