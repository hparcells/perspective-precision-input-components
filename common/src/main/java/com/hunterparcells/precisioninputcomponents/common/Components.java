package com.hunterparcells.precisioninputcomponents.common;

import com.hunterparcells.precisioninputcomponents.common.component.DebouncedTextArea;
import com.hunterparcells.precisioninputcomponents.common.component.DebouncedTextField;

import java.util.List;

public class Components {
    public static final List<Component> ALL = List.of(
        new DebouncedTextField(),
        new DebouncedTextArea()
    );
}
