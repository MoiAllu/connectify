import moment from "moment";
import Comment from "./Comment";

const CommentList = (data: any) => {
  const { getReplies } = data;
  console.log(data);
  return (
    <div>
      {data.rootComments.map((comment: any) => {
        return (
          <div key={comment.id}>
            <Comment {...{ comment, getReplies }} />
          </div>
        );
      })}
    </div>
  );
};
export default CommentList;
