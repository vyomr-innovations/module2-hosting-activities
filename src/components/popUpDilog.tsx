import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

type myProps = {
    open: boolean;
    setOpen:(value:boolean)=>void
    setIsFirstScreen:(value:string)=>void
};
const PopUpDilog = ({ open,setIsFirstScreen ,setOpen}: myProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger></DialogTrigger>
      <DialogContent className="min-h-[200px] flex justify-center items-center">
        <DialogHeader >
          <DialogTitle></DialogTitle>
          <DialogDescription className="flex justify-center items-center text-xl">
            <button onClick={()=>setIsFirstScreen("ShaduleScreen")} className="bg-green-600 py-2 px-4 rounded-lg text-white">{` let's create a schedule`}</button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PopUpDilog;
