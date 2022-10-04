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
            {/* <div className="flex flex-col flex-1">
              <p className="font-semibold">{comment.user.name}</p>
              <p className="text-sm">
                {moment
                  .unix(
                    Math.floor(new Date(comment.createdAt).getTime() / 1000)
                  )
                  .fromNow()}
              </p>
            </div>
            <div>
              <article>{comment.message}</article>
              <br></br>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};
export default CommentList;
