import Image from "next/image";

export const headers = [
  "Date",
  "Product",
  "Sales",
  "Category",
  "Price",
  "Status",
];

export const data = [
  {
    cells: [
      { content: "2/05/203" },
      {
        content: (
          <div className="flex items-center gap-3">
            <Image src="/assets/sadistar.png" width={40} height={37} alt="df" />
            <p className="text-sm font-medium">Sadistar NFT</p>
          </div>
        ),
      },
      { content: "100", type: "text-[#0D6EFD] underline font-medium" },
      { content: "Photography" },
      { content: "$30" },
      {
        content: (
          <button className="rounded-lg py-2 px-4 bg-[#0D6EFD]">Active</button>
        ),
      },
    ],
  },
  {
    cells: [
      { content: "2/05/203" },
      {
        content: (
          <div className="flex items-center gap-3">
            <Image src="/assets/sadistar.png" width={40} height={37} alt="df" />
            <p className="text-sm font-medium">Sadistar NFT</p>
          </div>
        ),
      },
      { content: "100", type: "text-[#0D6EFD] underline font-medium" },
      { content: "Ebooks" },
      { content: "$30" },
      {
        content: (
          <button className="rounded-lg py-2 px-4 bg-slate-500">
            In Active
          </button>
        ),
      },
    ],
  },
  {
    cells: [
      { content: "2/05/203" },
      {
        content: (
          <div className="flex items-center gap-3">
            <Image src="/assets/sadistar.png" width={40} height={37} alt="df" />
            <p className="text-sm font-medium">Sadistar NFT</p>
          </div>
        ),
      },
      { content: "100", type: "text-[#0D6EFD] underline font-medium" },
      { content: "Arts" },
      { content: "$30" },
      {
        content: (
          <button className="rounded-lg py-2 px-4 bg-[#0D6EFD]">Active</button>
        ),
      },
    ],
  },
  // Add more rows as needed
];

export const headersSales = [
  "Date",
  "Product",
  "Shopper",
  "Category",
  "Profit",
  "Sales",
  "Price",
  "Options",
];

export const dataSales = [
  {
    cells: [
      { content: "2/05/203" },
      {
        content: (
          <div className="flex items-center gap-3">
            <Image src="/assets/sadistar.png" width={40} height={37} alt="df" />

            <p className="text-sm font-medium">Sadistar NFT</p>
          </div>
        ),
      },
      { content: "ZicoStar" },
      { content: "Arts" },

      { content: "$30" },
      { content: "100", type: "underline font-medium" },
      { content: "$1000" },

      {
        content: (
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M28.415 9.17125L22.8288 3.58625C22.643 3.40049 22.4225 3.25313 22.1799 3.15259C21.9372 3.05205 21.6771 3.00031 21.4144 3.00031C21.1517 3.00031 20.8916 3.05205 20.6489 3.15259C20.4062 3.25313 20.1857 3.40049 20 3.58625L4.58626 19C4.39973 19.185 4.25185 19.4053 4.15121 19.648C4.05057 19.8907 3.99917 20.151 4.00001 20.4138V26C4.00001 26.5304 4.21072 27.0391 4.5858 27.4142C4.96087 27.7893 5.46958 28 6.00001 28H27C27.2652 28 27.5196 27.8946 27.7071 27.7071C27.8947 27.5196 28 27.2652 28 27C28 26.7348 27.8947 26.4804 27.7071 26.2929C27.5196 26.1054 27.2652 26 27 26H14.415L28.415 12C28.6008 11.8143 28.7481 11.5938 28.8487 11.3511C28.9492 11.1084 29.001 10.8483 29.001 10.5856C29.001 10.3229 28.9492 10.0628 28.8487 9.82016C28.7481 9.57747 28.6008 9.35698 28.415 9.17125ZM17 9.41375L19.0863 11.5L8.50001 22.0863L6.41376 20L17 9.41375ZM6.00001 26V22.4138L9.58626 26H6.00001ZM12 25.5863L9.91501 23.5L20.5 12.9138L22.5863 15L12 25.5863ZM24 13.5863L18.415 8L21.415 5L27 10.5863L24 13.5863Z"
                fill="#E9E9E9"
              />
            </svg>
          </div>
        ),
      },
    ],
  },
];

export const headerPurchase = [
  "Date",
  "Product",
  "Creator",
  "Category",
  "Price",
  "Status",
];

export const dataPurchase: Row[] = [
  {
    cells: [
      { content: "2/05/203" },
      {
        content: (
          <div className="flex items-center gap-3">
            <Image src="/assets/sadistar.png" width={40} height={37} alt="df" />
            <p className="text-sm font-medium">Sadistar NFT</p>
          </div>
        ),
      },
      { content: "Zisco" },
      { content: "Ebooks" },
      { content: "$30" },
      {
        content: (
          <button className="rounded-lg py-2 px-4 bg-[#0D6EFD]">
            View reciept
          </button>
        ),
      },
    ],
  },
  {
    cells: [
      { content: "2/05/203" },
      {
        content: (
          <div className="flex items-center gap-3">
            <Image src="/assets/sadistar.png" width={40} height={37} alt="df" />
            <p className="text-sm font-medium">Sadistar NFT</p>
          </div>
        ),
      },
      { content: "Zisco" },
      { content: "Photography" },
      { content: "$30" },
      {
        content: (
          <button className="rounded-lg py-2 px-4 bg-[#0D6EFD]">
            View reciept
          </button>
        ),
      },
    ],
  },
  {
    cells: [
      { content: "2/05/203" },
      {
        content: (
          <div className="flex items-center gap-3">
            <Image src="/assets/sadistar.png" width={40} height={37} alt="df" />
            <p className="text-sm font-medium">Sadistar NFT</p>
          </div>
        ),
      },
      { content: "Zisco" },
      { content: "Arts" },
      { content: "$30" },
      {
        content: (
          <button className="rounded-lg py-2 px-4 bg-[#0D6EFD]">
            View reciept
          </button>
        ),
      },
    ],
  },
  // Add more rows as needed
];
