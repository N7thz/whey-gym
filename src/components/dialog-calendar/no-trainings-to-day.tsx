import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export const NoTrainingsToDay = ({ date }: { date: Date }) => {

    const { push } = useRouter()

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl  text-muted-foreground font-light italic mx-auto">
                    Nenhum treino fio feito nesse dia
                </CardTitle>
            </CardHeader>
            <CardFooter>
                <Button
                    className="w-full"
                    onClick={() => push(`/create-training/${date}`)}
                >
                    Adicionar treino
                </Button>
            </CardFooter>
        </Card>
    )
}
