// Simple logger utility for execution messages

export class Logger {
    // log informational messages
    info(message: string): void {
        console.log(`[INFO] ${message}`);
    }
    // log error messages
    error(message: string): void {
        console.error(`[ERROR] ${message}`);
    }
    
}