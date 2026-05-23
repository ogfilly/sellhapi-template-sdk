const formatters: Partial<Record<string, Intl.NumberFormat>> = {};

function getFormatter(currency: string): Intl.NumberFormat {
  if (!formatters[currency]) {
    formatters[currency] = new Intl.NumberFormat(
      currency === "NGN" ? "en-NG" :
      currency === "USD" ? "en-US" :
      currency === "GBP" ? "en-GB" : "en-US",
      {
        style:                 "currency",
        currency,
        minimumFractionDigits: currency === "NGN" ? 0 : 2,
      }
    );
  }
  return formatters[currency]!;
}

export function formatPrice(amount: number, currency: string): string {
  try {
    return getFormatter(currency).format(amount);
  } catch {
    return `${currency} ${amount.toLocaleString()}`;
  }
}

export function formatCount(count: number): string {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
  if (count >= 1_000)     return `${(count / 1_000).toFixed(1)}K`;
  return String(count);
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}
