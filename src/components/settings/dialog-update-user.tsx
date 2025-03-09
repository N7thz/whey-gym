import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel
} from "@/components/ui/alert-dialog"
import { UserRoundPen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LabelEmail } from "../forms/label-email"
import { Form } from "../forms/form-primitive"
import { useForm } from "react-hook-form"
import { FormUpdateUser } from "../forms/form-update-user"

export const DialogUpdateUser = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="flex-1">
                    <UserRoundPen />
                    Editar Dados
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogTitle>
                    Editar Dados
                </AlertDialogTitle>
                <AlertDialogDescription>
                    Edite dos dados do seu usuário
                </AlertDialogDescription>
                <FormUpdateUser />
            </AlertDialogContent>
        </AlertDialog>
    )
}
