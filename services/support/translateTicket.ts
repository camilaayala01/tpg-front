import { Ticket } from "@/types/types";

const statusTranslation: Record<string, string> = {
    NOT_STARTED: 'No comenzado',
    IN_PROGRESS: 'En proceso',
    BLOCKED: 'Bloqueado',
    COMPLETED: 'Completado',
};

function mapearStatus(originalStatus: string): string {
    return statusTranslation[originalStatus] || originalStatus;
}

const priorityTranslation: Record<string, string> = {
    LOW: 'Baja',
    MEDIUM: 'Media',
    HIGH: 'Alta',
}

function mapearPriority(originalPrior: string): string{
    return priorityTranslation[originalPrior] || originalPrior;
}

export function translateInputTicket(ticket: Ticket){
    ticket['status'] = mapearStatus(ticket['status']);
    ticket['priority'] = mapearPriority(ticket['priority']);
    return ticket;
}