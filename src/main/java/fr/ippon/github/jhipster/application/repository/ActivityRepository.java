package fr.ippon.github.jhipster.application.repository;

import fr.ippon.github.jhipster.application.domain.Activity;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Activity entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {

}
