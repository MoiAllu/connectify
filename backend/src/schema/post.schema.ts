import S from 'fluent-json-schema'

export const createPostSchema = {
    body: S.object().prop('content', S.string().required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
}
export const deletePostSchema={
    body: S.object(),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
}
export const getAllPostsSchema = {
    body: S.object(),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
}
export const getUserPostsSchema = {
    body: S.object(),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
}
export const likePost = {
    body: S.object(),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
}