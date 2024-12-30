"use client";

import React, { useState, useMemo } from "react";
import { useAppContext } from "@/app/context/AppContext";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { format, addDays, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay } from "date-fns";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { cn } from "../lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

interface Communication {
  _id: string;
  companyId: string;
  methodId: string;
  date: Date | string;
  notes: string;
}

interface Company {
  _id: string;
  name: string;
  communicationPeriodicity: number; // days between communications
}

interface CommunicationMethod {
  _id: string;
  name: string;
  sequence: number; // Determines the order of methods
}

export const UserModule: React.FC = () => {
  const { companies, communicationMethods, communications, addCommunication } = useAppContext();
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [newCommunication, setNewCommunication] = useState({
    companyId: "",
    methodId: "",
    date: new Date(),
    notes: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<"week" | "month">("week");

  const sortedCommunications = useMemo(() => {
    return [...communications].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [communications]);

  const getLastFiveCommunications = (companyId: string) => {
    return sortedCommunications
      .filter((comm) => comm.companyId === companyId)
      .slice(0, 5)
      .map((comm) => {
        const method = communicationMethods.find((m) => m._id === comm.methodId);
        return `${method?.name} (${format(new Date(comm.date), "dd MMM")})`;
      })
      .join(", ");
  };

  const getNextScheduledCommunication = (companyId: string) => {
    const company = companies.find((c) => c._id === companyId);
    if (!company) return "N/A";

    const lastCommunication = sortedCommunications.find((comm) => comm.companyId === companyId);
    if (!lastCommunication) return "Due Now";

    const nextDate = new Date(lastCommunication.date);
    nextDate.setDate(nextDate.getDate() + company.communicationPeriodicity);

    const currentMethodSequence = communicationMethods.find(
      (m) => m._id === lastCommunication.methodId
    )?.sequence;
    const nextMethod =
      communicationMethods.find((m) => m.sequence > (currentMethodSequence ?? 0))?._id ||
      communicationMethods[0]._id;

    return `${communicationMethods.find((m) => m._id === nextMethod)?.name} (${format(nextDate, "dd MMM")})`;
  };

  const getHighlightClass = (companyId: string) => {
    const company = companies.find((c) => c._id === companyId);
    if (!company) return "";

    const lastCommunication = sortedCommunications.find((comm) => comm.companyId === companyId);
    if (!lastCommunication) return "bg-red-100";

    const nextDate = new Date(lastCommunication.date);
    nextDate.setDate(nextDate.getDate() + company.communicationPeriodicity);

    const today = new Date();
    if (nextDate < today) return "bg-red-100";
    if (nextDate.toDateString() === today.toDateString()) return "bg-yellow-100";
    return "";
  };

  const handleCommunicationPerformed = async () => {
    const newComms = selectedCompanies.map((companyId) => ({
      companyId,
      methodId: newCommunication.methodId,
      date: newCommunication.date,
      notes: newCommunication.notes,
    }));

    for (const comm of newComms) {
      await addCommunication(comm);
    }

    setSelectedCompanies([]);
    setNewCommunication({
      companyId: "",
      methodId: "",
      date: new Date(),
      notes: "",
    });
    setIsDialogOpen(false);
  };

  const weekDays = eachDayOfInterval({
    start: startOfWeek(currentDate),
    end: endOfWeek(currentDate),
  });

  const getDayEvents = (day: Date) => {
    return communications.filter((comm) => isSameDay(new Date(comm.date), day));
  };

  return (
    <div className="space-y-8">
      {/* Add Tabs, Tables, Cards, Calendar Logic here as in the given example */}
    </div>
  );
};
