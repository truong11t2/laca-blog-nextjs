import { jsx, Fragment, jsxs } from 'react/jsx-runtime'

// src/ui/TOCInline.tsx
var TOCInline = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = '',
}) => {
  const re = Array.isArray(exclude)
    ? new RegExp('^(' + exclude.join('|') + ')$', 'i')
    : new RegExp('^(' + exclude + ')$', 'i')
  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading && heading.depth <= toHeading && !re.test(heading.value)
  )
  const tocList = /* @__PURE__ */ jsx('ul', {
    children: filteredToc.map((heading) =>
      /* @__PURE__ */ jsx(
        'li',
        {
          className: `${heading.depth >= indentDepth && 'ml-6'}`,
          children: /* @__PURE__ */ jsx('a', { href: heading.url, children: heading.value }),
        },
        heading.value
      )
    ),
  })
  return /* @__PURE__ */ jsx(Fragment, {
    children: asDisclosure
      ? /* @__PURE__ */ jsxs('details', {
          open: true,
          children: [
            /* @__PURE__ */ jsx('summary', {
              className: 'ml-6 pt-2 pb-2 text-xl font-bold',
              children: 'Nội dung',
            }),
            /* @__PURE__ */ jsx('div', { className: 'ml-6', children: tocList }),
          ],
        })
      : tocList,
  })
}
var TOCInline_default = TOCInline

export { TOCInline_default as default }
