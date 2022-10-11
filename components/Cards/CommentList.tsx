import moment from "moment";
import Comment from "./Comment";

const CommentList = (data: any) => {
  const childComments = data;
  console.log(data.rootComments);
  return (
    <div>
      {data.rootComments.map((comment: any) => {
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
