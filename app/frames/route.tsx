/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { createFrames } from "frames.js/next";

const frames = createFrames({
  basePath: "/",
});

const handleRequest = frames(async (ctx) => {
  if (ctx.message?.transactionId) {
    return {
      image: (
        <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex">
          Transaction submitted! {ctx.message.transactionId}
        </div>
      ),
      imageOptions: {
        aspectRatio: "1:1",
      },
      buttons: [
        <Button
          action="link"
          target={`https://www.onceupon.gg/tx/${ctx.message.transactionId}`}
        >
          View on block explorer
        </Button>,
      ],
    };
  }

  return {
    image: 'https://firebasestorage.googleapis.com/v0/b/easter-eggs-2d914.appspot.com/o/base-egg.png?alt=media&token=83c70172-bfb9-4a87-b21c-f034c10f9802',
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button action="tx" target="/txdata" post_url="/frames">
        Find Your Easter Egg!
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
