package com.hunterparcells.precisioninputcomponents.common;

import java.util.Set;

import com.inductiveautomation.perspective.common.api.BrowserResource;

public class PrecisionInputComponents {
    public static final String MODULE_ID = "com.hunterparcells.precisioninputcomponents";
    public static final String URL_ALIAS = "precisioninputcomponents";
    public static final String COMPONENT_CATEGORY = "Precision Input Components";
    public static final Set<BrowserResource> BROWSER_RESOURCES =
            Set.of(
                    new BrowserResource(
                            "hunter-components-js",
                            String.format("/res/%s/PrecisionInputComponents.js", URL_ALIAS),
                            BrowserResource.ResourceType.JS
                    ),
                    new BrowserResource("hunter-components-css",
                            String.format("/res/%s/PrecisionInputComponents.css", URL_ALIAS),
                            BrowserResource.ResourceType.CSS
                    )
            );
}
