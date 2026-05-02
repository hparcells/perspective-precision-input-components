package com.hunterparcells.precisioninputcomponents.gateway;

import java.util.Optional;

import com.hunterparcells.precisioninputcomponents.common.component.DebouncedTextField;
import com.inductiveautomation.ignition.common.expressions.ExpressionFunctionManager;
import com.inductiveautomation.ignition.common.licensing.LicenseState;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.dataroutes.RouteGroup;
import com.inductiveautomation.ignition.gateway.model.AbstractGatewayModuleHook;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;
import com.inductiveautomation.perspective.common.api.ComponentRegistry;
import com.inductiveautomation.perspective.gateway.api.PerspectiveContext;
import com.hunterparcells.precisioninputcomponents.common.PrecisionInputComponents;

public class GatewayHook extends AbstractGatewayModuleHook {
    private static final LoggerEx log = LoggerEx.newBuilder().build("precisioninputcomponents.gateway.GatewayHook");

    private GatewayContext gatewayContext;
    private PerspectiveContext perspectiveContext;
    private ComponentRegistry componentRegistry;

    @Override
    public void setup(GatewayContext context) {
        this.gatewayContext = context;
        log.info("Setting up PrecisionInputComponents module.");
    }

    @Override
    public void startup(LicenseState activationState) {
        log.info("Starting up GatewayHook!");

        this.perspectiveContext = PerspectiveContext.get(this.gatewayContext);
        this.componentRegistry = this.perspectiveContext.getComponentRegistry();


        if(this.componentRegistry != null) {
            log.info("Registering Precision Input Components.");
            this.componentRegistry.registerComponent(new DebouncedTextField().getDescriptor());
        }else {
            log.error("Reference to component registry not found, Precision Input Components will fail to function!");
        }
    }

    @Override
    public void shutdown() {
        log.info("Shutting down Precision Input Components module and removing registered components.");
        if(this.componentRegistry != null) {
            this.componentRegistry.removeComponent(new DebouncedTextField().getNamespacedId());
        }else {
            log.warn("Component registry was null, could not unregister Precision Input Components.");
        }
    }

    @Override
    public void configureFunctionFactory(ExpressionFunctionManager factory) {
    }

    @Override
    public Optional<String> getMountedResourceFolder() {
        return Optional.of("mounted");
    }

    @Override
    public void mountRouteHandlers(RouteGroup routeGroup) {
        // DataEndpoints.mountRoutes(routeGroup);
    }

    @Override
    public Optional<String> getMountPathAlias() {
        return Optional.of(PrecisionInputComponents.URL_ALIAS);
    }

    @Override
    public boolean isFreeModule() {
        return true;
    }
}
