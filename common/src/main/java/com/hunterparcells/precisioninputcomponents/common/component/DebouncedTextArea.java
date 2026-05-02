package com.hunterparcells.precisioninputcomponents.common.component;

import com.hunterparcells.precisioninputcomponents.common.Component;

public class DebouncedTextArea extends Component {
    public DebouncedTextArea() {
        super(
                "pic.debouncedtextarea",
                "Debounced Text Area",
                "A text area with a debounced value.",
                "TxInput"
        );

        this.addPaletteEntry();
    }
}
