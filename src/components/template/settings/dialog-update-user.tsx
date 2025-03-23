import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription
} from "@/components/ui/alert-dialog"
import { UserRoundPen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FormUpdateUser } from "@/components/forms/form-update-user"

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
