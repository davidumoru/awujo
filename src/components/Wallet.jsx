import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import metamask from "../images/Metamask-icon.svg";
import coinbase from "../images/Coinbase-icon-symbol-1.svg";
import connect from "../images/walletconnect-seeklogo.com.svg"
import trust from "../images/trust-wallet-token-twt-seeklogo.com.svg";
 
export default function Wallet() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Connect Wallet</Button>
      <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <Typography variant="h5" color="blue-gray">
            Connect a Wallet
          </Typography>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll pr-2">
          <div className="mb-6">
            <Typography
              variant="small"
              color="gray"
              className="font-semibold opacity-70"
            >
              Popular
            </Typography>
            <ul className="mt-1 -ml-2 flex flex-col gap-1">
              <MenuItem className="flex items-center gap-3">
                <img
                  src={metamask}
                  alt="Wallet Icon"
                  className="h-6 w-6"
                />
                <Typography color="blue-gray" variant="h6">
                  MetaMask
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-3">
                <img
                  src={coinbase}
                  alt="Wallet Icon"
                  className="h-6 w-6 rounded-md"
                />
                <Typography color="blue-gray" variant="h6">
                  Coinbase Wallet
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-3">
                <img
                  src={connect}
                  alt="Wallet Icon"
                  className="h-6 w-6 rounded-md"
                />
                <Typography color="blue-gray" variant="h6">
                  Wallet Connect
                </Typography>
              </MenuItem>
            </ul>
          </div>
          <div>
            <Typography
              variant="small"
              color="gray"
              className="font-semibold opacity-70"
            >
              More
            </Typography>
            <ul className="mt-1 -ml-2.5 flex flex-col gap-1">
              <MenuItem className="flex items-center gap-3">
                <img
                  src={trust}
                  alt="Wallet Icon"
                  className="h-7 w-7 rounded-md border border-blue-gray-50"
                />
                <Typography color="blue-gray" variant="h6">
                  Trust Wallet
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-3">
                <img
                  src={metamask}
                  alt="Wallet Icon"
                  className="h-7 w-7 rounded-md border border-blue-gray-50"
                />
                <Typography color="blue-gray" variant="h6">
                  Coinbase Wallet
                </Typography>
              </MenuItem>
            </ul>
          </div>
        </DialogBody>
        <DialogFooter className="justify-between gap-2 border-t border-blue-gray-50">
          <Typography variant="small" color="gray" className="font-normal">
            New to Ethereum wallets?
          </Typography>
          <Button variant="text" size="sm">
            Learn More
          </Button>
        </DialogFooter>
      </Dialog>
    </React.Fragment>
  );
}