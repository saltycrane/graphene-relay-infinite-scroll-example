import { useEffect } from "react";

type TProps<TElement extends HTMLElement> = {
  elementRef: React.MutableRefObject<TElement>;
  onScrollIntoView: () => void;
};

export default function useInfiniteScroll<TElement extends HTMLElement>({
  elementRef,
  onScrollIntoView,
}: TProps<TElement>) {
  useEffect(() => {
    // Via react-hooks/exhaustive-deps eslint[1], copy elementRef.current to a
    // variable so it can be used in the cleanup function.
    //
    // [1] > The ref value 'elementRef.current' will likely have changed by the
    //     > time this effect cleanup function runs. If this ref points to a node
    //     > rendered by React, copy 'elementRef.current' to a variable inside the
    //     > effect, and use that variable in the cleanup function.
    const element = elementRef.current;

    const observer = new IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        onScrollIntoView();
      }
    }, {});

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, onScrollIntoView]);
}
