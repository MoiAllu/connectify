import moment from "moment";
import Comment from "./Comment";

const CommentList = (data: any) => {
  //   console.log(data.comment.rootComments);
  const childComments = data.comment;
  return (
    <div>
      {data.comment.rootComments.map((comment: any) => {
        return (
          <div key={comment.id}>
            <Comment {...{ comment, childComments }} />
          </div>
        );
      })}
    </div>
  );
};
export default CommentList;
