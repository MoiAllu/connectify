import moment from "moment";

const Comment = (data: any) => {
  //   const nestedComment = data.data.getReplies(data.data.id);
  console.log(data);
  const childernComents = data.childComments.getReplies(data.comment.id);
  console.log(childernComents);
  return (
    <div className="border rounded-sm p-2 mb-2">
      <div className="flex flex-col flex-1">
        <p className="font-semibold">{data.comment.user?.name}</p>
        <p className="text-sm">
          {moment
            .unix(Math.floor(new Date(data.comment.createdAt).getTime() / 1000))
            .fromNow()}
        </p>
      </div>
      <div>
        <article>{data.comment.message}</article>
      </div>
      {childernComents &&
        childernComents.map((child: any) => (
          <div key={child.id} className="ml-2">
            <div className="flex flex-col flex-1">
              <p className="font-semibold">{child.user?.name}</p>
              <p className="text-sm">
                {moment
                  .unix(Math.floor(new Date(child.createdAt).getTime() / 1000))
                  .fromNow()}
              </p>
            </div>
            <div>
              <article>{child.message}</article>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Comment;
