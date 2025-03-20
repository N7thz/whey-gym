import { Button } from "@/components/ui/button"
import { DialogClose, DialogFooter } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

type DialogCalendarFooterProps = { id: string }

export const DialogCalendarFooter = ({ id }: DialogCalendarFooterProps) => {

  const { push } = useRouter()

  return (
    <DialogFooter>
      <Button
        className="w-1/2"
        onClick={() => push(`/trainigs/${id}`)}
      >
        Editar Treino
      </Button>
      <DialogClose asChild>
        <Button
          variant={"destructive"}
          className="w-1/2"
        >
          Cancelar
        </Button>
      </DialogClose>
    </DialogFooter>
  )
}
