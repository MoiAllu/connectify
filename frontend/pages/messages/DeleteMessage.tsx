import React from "react";
import deleteMessageHandler from "../../lib/Utilities/messages/deleteMessageHandler";
import { pusherClient } from "../../lib/pusher";
import { find } from "lodash";
type Props = {
  setDeleteBackdropHandler: React.Dispatch<React.SetStateAction<boolean>>;
  deleteMessageData: {
    userId: number;
    messageId: number;
    conversationId: number;
  };
  setAllMessages: React.Dispatch<React.SetStateAction<{}>>;
  deleteMessage: any;
  setDeleteMessage: React.Dispatch<React.SetStateAction<{}>>;
};

const DeleteMessage = (props: Props) => {
  const { userId, messageId, conversationId } = props.deleteMessageData;
  const [changeState, setChangeState] = React.useState(false);
  //Delete message from database
  //   React.useEffect(() => {
  //     console.log("changeState", changeState);
  //     const messageHandler = (data: any) => {
  //       props.setAllMessages((prev: any) => {
  //         if (find(prev.message, { id: data.id })) {
  //           console.log("Filter Array", {
  //             ...prev,
  //             message: prev.message.filter(
  //               (message: any) => message.id !== data.id
  //             ),
  //           });
  //           return {
  //             ...prev,
  //             message: prev.message.filter(
  //               (message: any) => message.id !== data.id
  //             ),
  //           };
  //         } else return { ...prev };
  //       });
  //     };
  //     const conversationid = "deleteChat" + conversationId;
  //     // console.log(conversationid);
  //     pusherClient.subscribe(conversationid);
  //     pusherClient.bind("deleteChat", messageHandler);
  //     return () => {
  //       pusherClient.unsubscribe(conversationid);
  //       pusherClient.unbind("deleteChat", messageHandler);
  //     };
  //   }, [changeState]);

  const deleteHandler = async (e: any) => {
    e.preventDefault();
    setChangeState(!changeState);
    const response = await deleteMessageHandler({
      messageId,
      userId,
      conversationId,
    });
    // console.log(response);
    props.setDeleteMessage({ response });
    props.setDeleteBackdropHandler(false);

    const messageHandler = (data: any) => {
      props.setAllMessages((prev: any) => {
        if (find(prev.message, { id: data.id })) {
          console.log("Filter Array", {
            ...prev,
            message: prev.message.filter(
              (message: any) => message.id !== data.id
            ),
          });
          return {
            ...prev,
            message: prev.message.filter(
              (message: any) => message.id !== data.id
            ),
          };
        } else return { ...prev };
      });
    };
    const conversationid = "deleteChat" + conversationId;
    // console.log(conversationid);
    pusherClient.subscribe(conversationid);
    pusherClient.bind("deleteChat", messageHandler);
    return () => {
      pusherClient.unsubscribe(conversationid);
      pusherClient.unbind("deleteChat", messageHandler);
    };
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-white rounded-md p-4">
        <h1 className="text-xl font-semibold">Delete Message</h1>
        <p className="text-sm text-gray-500">
          Are you sure you want to delete this message?
        </p>
        <div className="flex gap-2 mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-600 flex justify-center gap-2 "
            disabled={changeState}
            onClick={deleteHandler}
          >
            {changeState === true ? "Deleting" : ""}
            {changeState === true ? (
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Delete"
            )}
          </button>
          {changeState === false && (
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
              onClick={() => props.setDeleteBackdropHandler(false)}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default DeleteMessage;
