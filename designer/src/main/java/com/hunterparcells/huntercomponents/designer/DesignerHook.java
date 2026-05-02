package com.hunterparcells.huntercomponents.designer;

import com.hunterparcells.huntercomponents.common.component.DebouncedTextField;
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
    private static final LoggerEx logger = LoggerEx.newBuilder().build("HunterComponents");

    private DesignerContext context;
    private DesignerComponentRegistry registry;
    private ComponentDesignDelegateRegistry delegateRegistry;

    static {
        BundleUtil.get().addBundle("huntercomponents", DesignerHook.class.getClassLoader(), "huntercomponents");
    }

    public DesignerHook() {
        logger.info("Registering Hunter's Components in Designer!");
    }

    private void init() {
        logger.debug("Initializing registry entrants...");

        PerspectiveDesignerInterface pdi = PerspectiveDesignerInterface.get(context);

        registry = pdi.getDesignerComponentRegistry();
        delegateRegistry = pdi.getComponentDesignDelegateRegistry();

        registry.registerComponent(new DebouncedTextField().getDescriptor());
    }

    private void removeComponents() {
        registry.removeComponent(new DebouncedTextField().getNamespacedId());
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
