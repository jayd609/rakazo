/**
 * An account's explicit preference wins over the deployment default.
 * Unconfigured deployments retain the existing enabled default.
 */
export function resolveDefaultCrossSpaceCommunication(
  preference: boolean | null | undefined,
  value = process.env.RAKAZO_CROSS_SPACE_COMMUNICATION_DEFAULT,
): boolean {
  if (value !== undefined && value !== "true" && value !== "false") {
    throw new Error("RAKAZO_CROSS_SPACE_COMMUNICATION_DEFAULT must be true or false");
  }
  return preference ?? value !== "false";
}
