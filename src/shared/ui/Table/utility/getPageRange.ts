const DOTS = "...";

type PageItem = number | typeof DOTS;

/**
 * Generates the page numbers and ellipses displayed in pagination.
 */
export function getPageRange(
  current: number,
  total: number,
  siblingCount: number,
): PageItem[] {
  const totalNumbers = siblingCount * 2 + 5;

  if (total <= totalNumbers) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(current - siblingCount, 1);
  const rightSibling = Math.min(current + siblingCount, total);

  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < total - 1;

  if (!showLeftDots && showRightDots) {
    const leftRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => i + 1,
    );

    return [...leftRange, DOTS, total];
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = Array.from(
      { length: 3 + siblingCount * 2 },
      (_, i) => total - (3 + siblingCount * 2) + i + 1,
    );

    return [1, DOTS, ...rightRange];
  }

  const middleRange = Array.from(
    { length: rightSibling - leftSibling + 1 },
    (_, i) => leftSibling + i,
  );

  return [1, DOTS, ...middleRange, DOTS, total];
}
