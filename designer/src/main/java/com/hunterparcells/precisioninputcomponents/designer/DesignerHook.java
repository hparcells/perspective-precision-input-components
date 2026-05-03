package com.hunterparcells.precisioninputcomponents.designer;

import com.hunterparcells.precisioninputcomponents.common.Component;
import com.hunterparcells.precisioninputcomponents.common.Components;
import com.inductiveautomation.ignition.common.BundleUtil;
import com.inductiveautomation.ignition.common.expressions.ExpressionFunctionManager;
import com.inductiveautomation.ignition.common.licensing.LicenseState;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.designer.model.AbstractDesignerModuleHook;
import com.inductiveautomation.ignition.designer.model.DesignerContext;
import com.inductiveautomation.perspective.designer.DesignerComponentRegistry;
import com.inductiveautomation.perspective.designer.api.ComponentDesignDelegateRegistry;
import com.inductiveautomation.perspective.designer.api.PerspectiveDesignerInterface;

public class DesignerHook extends AbstractDesignerModuleHook {
    private static final LoggerEx logger = LoggerEx.newBuilder().build("PrecisionInputComponents");

    private DesignerContext context;
    private DesignerComponentRegistry registry;
    private ComponentDesignDelegateRegistry delegateRegistry;

    static {
        BundleUtil.get().addBundle("precisioninputcomponents", DesignerHook.class.getClassLoader(), "precisioninputcomponents");
    }

    public DesignerHook() {
        logger.info("Registering Precision Input Components in Designer!");
    }

    private void init() {
        logger.debug("Initializing registry entrants...");

        PerspectiveDesignerInterface pdi = PerspectiveDesignerInterface.get(context);

        registry = pdi.getDesignerComponentRegistry();
        delegateRegistry = pdi.getComponentDesignDelegateRegistry();

        for (Component component : Components.ALL) {
            registry.registerComponent(component.getDescriptor());
        }

        // Designer-specific code below.
    }

    private void removeComponents() {
        for (Component component : Components.ALL) {
            registry.removeComponent(component.getNamespacedId());
        }
    }

    @Override
    public void configureFunctionFactory(ExpressionFunctionManager factory) {
    }

    @Override
    public void startup(DesignerContext context, LicenseState activationState) {
        this.context = context;
        init();
    }

    @Override
    public void shutdown() {
        removeComponents();
    }
}
