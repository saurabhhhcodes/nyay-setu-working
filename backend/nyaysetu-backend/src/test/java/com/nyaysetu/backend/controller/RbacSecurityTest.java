package com.nyaysetu.backend.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("test")
class RbacSecurityTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockUser(username = "litigant@example.com", roles = {"LITIGANT"})
    void shouldDenyLitigantAccessToJudgeEndpoint() throws Exception {
        mockMvc.perform(get("/api/v1/judge/cases"))
                .andExpect(status().isForbidden());
    }

    @Test
    @WithMockUser(username = "litigant@example.com", roles = {"LITIGANT"})
    void shouldDenyLitigantAccessToAdminEndpoint() throws Exception {
        mockMvc.perform(get("/api/v1/cases/pending-assignment"))
                .andExpect(status().isForbidden());
    }
    @Test
    @WithMockUser(username = "litigant@example.com", roles = {"LITIGANT"})
    void shouldAllowLitigantAccessToOwnCases() throws Exception {
        mockMvc.perform(get("/api/v1/cases"))
                .andExpect(status().isOk());
}
}
