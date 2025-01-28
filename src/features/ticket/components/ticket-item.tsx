import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ticketPath } from "@/path";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../types";

type TicketItemProp = {
  ticket: Ticket;
};

const TicketItem = ({ ticket }: TicketItemProp) => {
  return (
    <Card
      key={ticket.id}
      className="w-full max-w-[420px]"
      //className="w-full max-w-[420px] p-4 border border-slate-100 rounded"
    >
      <CardHeader>
        <CardTitle className="flex gap-x-2">
          <span>{TICKET_ICONS[ticket.status]}</span>
          <span className="truncate">{ticket.title}</span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <span className="line-clamp-3">{ticket.content}</span>
      </CardContent>
      <CardFooter>
        <Link href={ticketPath(ticket.id)} className="text-sm underline">
          View
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TicketItem;
