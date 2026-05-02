package com.hunterparcells.precisioninputcomponents.common.component;

import com.hunterparcells.precisioninputcomponents.common.Component;

public class DebouncedTextField extends Component {
    public DebouncedTextField() {
        super(
                "pic.debouncedtextfield",
                "Debounced Text Field",
                "A text field with a debounced value.",
                "TxInput"
        );

        this.addPaletteEntry();
    }
}
