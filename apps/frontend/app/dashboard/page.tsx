"use client";
import React, { useState, useMemo } from "react";
import { ChevronDown, ChevronUp, Globe, Plus, Moon, Sun } from "lucide-react";
import { useWebsites } from "@/hooks/useWebsites";

function StatusCircle({ status }: { status: string }) {
    return (
        <div
            className={`w-3 h-3 rounded-full ${status === "up" ? "bg-green-500" : "bg-red-500"}`}
        />
    );
}

function UptimeTicks({
    ticks,
}: {
    ticks: { status: string; createdAt: string }[];
}) {
    // Aggregate ticks into 3-minute windows
    const aggregatedTicks = useMemo(() => {
        const windows: { status: string; timestamp: number }[] = [];
        const now = Date.now();
        const threeMinutes = 3 * 60 * 1000;

        // Create 10 windows for the last 30 minutes
        for (let i = 0; i < 10; i++) {
            const windowEnd = now - i * threeMinutes;
            const windowStart = windowEnd - threeMinutes;

            const windowTicks = ticks.filter((tick) => {
                const tickTime = new Date(tick.createdAt).getTime();
                return tickTime >= windowStart && tickTime < windowEnd;
            });

            // If any tick in the window is down, mark the window as down
            const windowStatus = windowTicks.some(
                (tick) => tick.status === "down"
            )
                ? "down"
                : "up";
            windows.unshift({ status: windowStatus, timestamp: windowStart });
        }

        return windows;
    }, [ticks]);

    return (
        <div className="flex gap-1 mt-2">
            {aggregatedTicks.map((window, index) => (
                <div
                    key={index}
                    className={`w-8 h-2 rounded ${window.status === "up" ? "bg-green-500" : "bg-red-500"}`}
                    title={`${window.status === "up" ? "Operational" : "Down"} at ${new Date(window.timestamp).toLocaleTimeString()}`}
                />
            ))}
        </div>
    );
}

function WebsiteCard({
    website,
}: {
    website: {
        id: string;
        url: string;
        ticks: { status: string; createdAt: string }[];
    };
}) {
    const [isOpen, setIsOpen] = useState(false);

    // Calculate current status based on most recent tick
    const currentStatus = useMemo(() => {
        const latestTick = [...website.ticks].sort(
            (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
        )[0];
        return latestTick?.status || "unknown";
    }, [website.ticks]);

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors">
            <div
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-4">
                    <StatusCircle status={currentStatus} />
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                            {website.url}
                        </h3>
                    </div>
                </div>
                {isOpen ? (
                    <ChevronUp className="dark:text-gray-400" size={20} />
                ) : (
                    <ChevronDown className="dark:text-gray-400" size={20} />
                )}
            </div>

            {isOpen && (
                <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            Last 30 minutes
                        </span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {currentStatus === "up" ? "Operational" : "Down"}
                        </span>
                    </div>
                    <UptimeTicks ticks={website.ticks} />
                </div>
            )}
        </div>
    );
}

function CreateWebsiteModal({
    isOpen,
    onClose,
    onAdd,
}: {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (website: { url: string }) => void;
}) {
    const [url, setUrl] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAdd({ url });
        setUrl("");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    Add New Website
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            URL
                        </label>
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            required
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Add Website
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function App() {
    const websites = useWebsites();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(
        () => window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    React.useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const handleAddWebsite = (website: { url: string }) => {
        // This would typically make an API call to add the website
        console.log("Adding website:", website);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <Globe
                            className="text-blue-600 dark:text-blue-400"
                            size={32}
                        />
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Uptime Monitor
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <Sun
                                    className="text-gray-900 dark:text-white"
                                    size={20}
                                />
                            ) : (
                                <Moon
                                    className="text-gray-900 dark:text-white"
                                    size={20}
                                />
                            )}
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            <Plus size={20} />
                            Add Website
                        </button>
                    </div>
                </div>
                <div className="space-y-4">
                    {websites.map(
                        (website: {
                            id: string;
                            url: string;
                            ticks: { status: string; createdAt: string }[];
                        }) => (
                            <WebsiteCard key={website.id} website={website} />
                        )
                    )}
                </div>
            </div>

            <CreateWebsiteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onAdd={handleAddWebsite}
            />
        </div>
    );
}

export default App;
