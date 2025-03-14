import { deleteLocalStorage } from "../utils/storage-helpers";

export async function purgeOnStartup(): Promise<void> {
  chrome.runtime.onStartup.addListener(async function () {
    const keysToPurge: string[] = ["webSocketConnectedMellowtel"];
    await deleteLocalStorage(keysToPurge);
  });
}
