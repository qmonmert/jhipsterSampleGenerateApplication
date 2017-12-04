package fr.ippon.github.jhipster.application.cucumber.stepdefs;

import fr.ippon.github.jhipster.application.JhipsterSampleGenerateApplicationApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = JhipsterSampleGenerateApplicationApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
