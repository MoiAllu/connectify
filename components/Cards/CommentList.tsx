import moment from "moment";
import Comment from "./Comment";

const CommentList = (data: any) => {
  const { getReplies, localComments, deleteLocalComment } = data;
  return (
    <div>
      {data.rootComments.map((comment: any) => {
        return (
          <div key={comment.id}>
            <Comment
              {...{ comment, getReplies, localComments, deleteLocalComment }}
            />
          </div>
        );
      })}
    </div>
  );
};
export default CommentList;
