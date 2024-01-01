```js
<script>
    function pirschClickEvent(element) {
        const name = element.getAttribute("data-pirsch-event");

        if (!name) {
            console.error("Pirsch event attribute name must not be empty!", element);
            return;
        }

        const meta = {};
        let duration;

        for (const attribute of element.attributes) {
            if (attribute.name.startsWith("data-pirsch-meta-")) {
                meta[attribute.name.substring("data-pirsch-meta-".length)] = attribute.value;
            } else if (attribute.name.startsWith("data-pirsch-duration")) {
                duration = Number.parseInt(attribute.value, 10) ?? 0;
            }
        }

        pirsch(name, {meta, duration});
    }

    document.addEventListener("DOMContentLoaded", () => {
        const elements = document.querySelectorAll("[data-pirsch-event]");

        for (const element of elements) {
            element.addEventListener("click", () => {
                pirschClickEvent(element);
            });
            element.addEventListener("auxclick", () => {
                pirschClickEvent(element);
            });
        }
    });
</script>
```
