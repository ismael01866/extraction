type ObserverOptions = NonNullable<ConstructorParameters<typeof IntersectionObserver>[1]>;

export type UseInViewOptions = ObserverOptions & {
  once?: boolean;
  initialInView?: boolean;
};
