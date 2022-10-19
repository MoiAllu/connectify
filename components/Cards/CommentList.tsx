import moment from "moment";
import Comment from "./Comment";

const CommentList = (data: any) => {
  const { getReplies, localComments } = data;
  return (
    <div>
      {data.rootComments.map((comment: any) => {
        return (
          <div key={comment.id}>
            <Comment {...{ comment, getReplies, localComments }} />
          </div>
        );
      })}
    </div>
  );
};
export default CommentList;
