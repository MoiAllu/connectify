import S from 'fluent-json-schema'

export const createCommentSchema = {
    body: S.object().prop('message', S.string().required()),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
}
export const deleteCommentSchema={
    body: S.object(),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
}
export const getAllCommentSchema = {
    body: S.object(),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
}
export const getUserCommentSchema = {
    body: S.object(),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
}
export const likeComment = {
    body: S.object(),
    queryString: S.object(),
    params: S.object(),
    headers: S.object(),
}