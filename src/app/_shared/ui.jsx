"use client";

import Link from "next/link";
import Image from "next/image";
import { forwardRef } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import topographyImage from "../../../public/img/contact-topography.jpg";

export function clsx(...parts) {
  return parts.filter(Boolean).join(" ");
}

export function Container({ as: As = "div", className = "", children, ...rest }) {
  return (
    <As
      className={clsx(
        "mx-auto w-full max-w-[88rem] px-6 sm:px-8 lg:px-12",
        className
      )}
      {...rest}
    >
      {children}
    </As>
  );
}

export function Eyebrow({ children, className = "", index }) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-3 label-mono text-saffron",
        className
      )}
    >
      {typeof index === "number" && (
        <span className="text-ink-300">
          {String(index).padStart(2, "0")}
        </span>
      )}
      <span className="inline-block h-px w-6 bg-saffron/60" />
      <span>{children}</span>
    </div>
  );
}

export const Button = forwardRef(function Button(
  {
    href,
    variant = "primary",
    size = "md",
    children,
    className = "",
    icon,
    showArrow = false,
    ...props
  },
  ref
) {
  const base =
    "group/btn relative inline-flex items-center justify-center font-medium tracking-tight transition-all duration-300 ease-out select-none disabled:opacity-50 disabled:cursor-not-allowed";

  const sizes = {
    sm: "h-10 px-5 text-sm gap-2",
    md: "h-12 px-7 text-[0.9375rem] gap-2.5",
    lg: "h-14 px-9 text-base gap-3",
  };

  const variants = {
    primary:
      "bg-saffron text-ink hover:bg-saffron-400 active:bg-saffron-600 shadow-[0_0_0_1px_rgba(245,197,24,0.4),0_8px_30px_-8px_rgba(245,197,24,0.5)] hover:shadow-[0_0_0_1px_rgba(245,197,24,0.6),0_12px_40px_-8px_rgba(245,197,24,0.7)]",
    secondary:
      "bg-transparent text-ink-50 hover:text-saffron border border-ink-50/15 hover:border-saffron/60 backdrop-blur-sm",
    ghost:
      "bg-transparent text-ink-100 hover:text-saffron",
  };

  const content = (
    <>
      {icon && <span className="-ml-0.5">{icon}</span>}
      <span className="relative">{children}</span>
      {showArrow && (
        <RxArrowTopRight className="size-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
      )}
    </>
  );

  const cls = clsx(base, sizes[size], variants[variant], className);

  if (href) {
    const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a ref={ref} href={href} className={cls} {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link ref={ref} href={href} className={cls} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button ref={ref} className={cls} {...props}>
      {content}
    </button>
  );
});

export function SectionHeader({ eyebrow, title, lede, align = "left", index }) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
      {title && (
        <h2 className="heading-2 mt-7 text-5xl text-ink-50 sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {title}
        </h2>
      )}
      {lede && (
        <p className="body-lead mt-6 max-w-2xl text-lg md:text-xl">
          {lede}
        </p>
      )}
    </div>
  );
}

export function TopographyBackground({ priority = true }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Image
        src={topographyImage}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        placeholder="blur"
        quality={90}
        className="object-cover object-right opacity-80"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.55) 50%, rgba(10,10,11,0) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,11,0) 0%, rgba(10,10,11,0.95) 100%)",
        }}
      />
    </div>
  );
}

export function MaxeraWordmark({ className = "", title = "Maxera" }) {
  return (
    <svg
      viewBox="248 332 532 102"
      className={className}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid meet"
    >
      <g fill="currentColor" stroke="none">
        <path d="m 260.3,341.57 v 84.859 h 10.757 v -65.616 l 19.004,33.944 5.737,-9.8006 -24.143,-43.386 z m 72.907,0 -30.836,55.099 -5.6174,9.8006 2.6294,4.6613 h 6.0955 l 28.207,-50.318 v 65.616 h 10.757 v -84.859 z" />
        <path d="m 408.53,353.16 -4.6613,12.669 10.757,27.37 h -21.28 l -3.227,8.3664 h 26.892 l 10.04,24.86 h 11.474 z m -4.6613,-11.593 h -9.0835 l -34.78,84.859 h 10.996 l 28.31,-72.43 z" />
        <path d="m 476.52,369.18 -20.08,-27.61 h -11.952 l 26.175,35.378 z m 43.386,-27.609 h -11.832 l -25.816,35.378 -5.8565,7.6493 -30.956,41.832 h 11.952 l 24.86,-34.183 24.86,34.183 h 11.832 l -30.956,-41.832 z" />
        <path d="m 545.46,351.13 h 45.776 v -9.5616 h -56.533 v 26.294 h 10.757 z m -10.757,65.736 v 9.5616 h 57.609 v -9.5616 z m 10.757,-29.282 h 39.8 v -8.964 h -50.557 v 27.49 h 10.757 z" />
        <path d="m 655.61,393.92 c 2.6294,-0.5976 5.1394,-1.7928 7.2907,-3.4661 2.1514,-1.5538 4.0637,-3.4661 5.6174,-5.737 1.5538,-2.1514 2.749,-4.6613 3.5856,-7.4102 0.83664,-2.749 1.3147,-5.6174 1.3147,-8.6054 0,-3.3466 -0.71712,-6.5736 -1.9123,-9.8006 -1.3147,-3.227 -3.1075,-6.0955 -5.3784,-8.725 -2.2709,-2.6294 -5.0198,-4.6613 -8.1274,-6.215 -3.1075,-1.5538 -6.5736,-2.3904 -10.279,-2.3904 h -36.334 v 84.859 h 10.757 v -30.48 h 10.757 l -5.976,-9.5616 h -4.7808 v -35.26 h 24.98 c 2.0318,0 3.9442,0.47808 5.8565,1.4342 1.9123,0.95616 3.4661,2.1514 4.9003,3.8246 1.4342,1.6733 2.5099,3.4661 3.3466,5.6174 0.83664,2.1514 1.3147,4.4222 1.3147,6.6931 0,2.3904 -0.35856,4.5418 -1.0757,6.6931 -0.83664,2.2709 -1.7928,4.0637 -2.988,5.737 -1.3147,1.6733 -2.8685,2.988 -4.6613,3.8246 -1.7928,0.95616 -3.8246,1.4342 -5.976,1.4342 h -9.4421 l 6.215,9.5616 19.362,30.478 h 12.191 z" />
        <path d="m 733.7,353.16 -4.6613,12.669 10.757,27.37 h -21.275 l -3.227,8.3664 h 26.892 l 10.04,24.86 h 11.474 z m -4.6613,-11.593 h -9.0835 l -34.78,84.859 h 10.996 l 28.326,-72.429 z" />
      </g>
    </svg>
  );
}

export function StackSlide({ z, children }) {
  return (
    <div
      className="bg-ink lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:items-center"
      style={{ zIndex: z }}
    >
      <div className="w-full">{children}</div>
    </div>
  );
}

export function HairlineDivider({ className = "" }) {
  return (
    <div
      className={clsx(
        "h-px w-full bg-gradient-to-r from-transparent via-ink-50/15 to-transparent",
        className
      )}
    />
  );
}
