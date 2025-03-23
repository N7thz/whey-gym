import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel
} from "@/components/ui/alert-dialog"
import { UserRoundX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useHttp } from "@/http/api"
import { useCurrentUser } from "@/providers/user-provider"
import { toast } from "@/components/toast"
import { signOut } from "@/functions/sign-out"
import { useRouter } from "next/navigation"

export const DialogremoveUser = () => {

    const http = useHttp()
    const { data: user } = useCurrentUser()
    const { refresh } = useRouter()

    if (!user) return (
        <Button>
            <UserRoundX />
            Excluir conta
        </Button>
    )

    function removeUser(id: string) {
        http
            .remove(id)
            .then(() => {
                toast({
                    title: "O usuário foi excluido com sucesso.",
                    variant: "sucess",
                })

                setTimeout(() => signOut(refresh), 2000)
            })
            .catch(err => {
                console.log(err)

                toast({
                    title: "Erro ao criar usuário.",
                    variant: "error",
                })
            })
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button>
                    <UserRoundX />
                    Excluir conta
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogTitle>
                    Excluir usuário
                </AlertDialogTitle>
                <AlertDialogDescription>
                    Você perderá todos os dados
                </AlertDialogDescription>
                <div>
                    <span className="text-2xl text-destructive italic">
                        Tem certeza que deseja excluir sua conta?
                    </span>
                    <AlertDialogFooter className="mt-6">
                        <AlertDialogCancel className="w-1/2">
                            Cancelar
                        </AlertDialogCancel>
                        <Button
                            className="w-1/2"
                            onClick={() => removeUser(user.id)}
                        >
                            Confirmar
                        </Button>
                    </AlertDialogFooter>
                </div>
            </AlertDialogContent>
        </AlertDialog>
    )
}
